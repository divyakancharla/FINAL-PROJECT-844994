using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using emart_userservice.Models;
using emart_userservice.Repositories;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Configuration;

namespace emart_userservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly IUser conn;
        private readonly IConfiguration configuration;
        public UserController(IUser con,IConfiguration configuration)
        {
            this.configuration = configuration;
            this.conn = con;
        }
        [HttpPost]
        [Route("addb")]
        public IActionResult addb(Buyer item)
        {
            try
            {
                conn.addb(item);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("adds")]
        public IActionResult adds(Seller items)
        {
            try
            {
                conn.adds(items);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("loginb/{name}/{pass}")]
        public IActionResult loginb(string name,string pass)
        {
            Token token = null;
            try
            {
                
                Buyer buyer =conn.loginb(name,pass);
                if (buyer != null)
                {
                    token = new Token() { Buyerid = buyer.Id, token = GenerateJwtToken(name), message = "success" };
                }
                //return Ok(_repo.BuyerLogin(username, password));
                else
                {
                    token = new Token() { token = null, message = "Unsucess" };
                }
                return Ok(token);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("login/{name}/{pass}")]
        public IActionResult logins(string name, string pass)
        {
            Token token = null;
            try
            {
                Seller seller = conn.logins(name, pass);
                if (seller != null)
                {
                    token = new Token() { Sellerid = seller.Id, token = GenerateJwtToken(name), message = "success" };
                }
                //return Ok(_repo.BuyerLogin(username, password));
                else
                {
                    token = new Token() { token = null, message = "Unsucess" };
                }
                return Ok(token);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        
        private string GenerateJwtToken(string username)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, username),
                new Claim(ClaimTypes.Role,username)
            };
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JwtKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            // recommended is 5 min
            var expires = DateTime.Now.AddDays(Convert.ToDouble(configuration["JwtExpireDays"]));
            var token = new JwtSecurityToken(
                configuration["JwtIssuer"],
                configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
