using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using emart_sellerservice.Models;
using emart_sellerservice.Repositories;
using Microsoft.AspNetCore.Authorization;

namespace emart_sellerservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
 [Authorize]
    public class SellerController : ControllerBase
    {
        private readonly ISeller conn;
        public SellerController(ISeller con)
        {
            conn = con;
        }
        [HttpGet]
        [Route("myprofile/{id}")]
        public IActionResult viewprofile(int id)
        {
            try
            {

                return Ok(conn.MyProfile(id));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPut]
        [Route("editprofile")]
        public IActionResult editprofile(Seller s)
        {
            try
            {
                conn.editprofile(s);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
    }
}