using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using emart_buyerservice.Models;
using emart_buyerservice.Repositories;
using Microsoft.AspNetCore.Authorization;

namespace emart_buyerservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
   [Authorize]
    public class BuyerController : ControllerBase
    {
        private readonly IBuyer _repo;
        public BuyerController(IBuyer repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("Add")]
        public IActionResult BuyItem(PurchaseHistory item)
        {
            try
            {
                _repo.BuyItem(item);
                return Ok();

            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPut]
        [Route("Edit")]
        public IActionResult EditProfile(Buyer buyer)
        {
            try
            {
                _repo.Editprofile(buyer);
                return Ok();

            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("BuyItem")]
        public IActionResult Buy(PurchaseHistory buy)
        {
            try
            {
                _repo.BuyItem(buy);
                return Ok();

            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("AddCart")]
        public IActionResult AddCart(Addcart buy)
        {
            try
            {
                _repo.addcart(buy);
                return Ok();

            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("get/{id}")]
        public IActionResult Getprofile(int id)
        {
            try
            {

                return Ok(_repo.GetProfile(id));

            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("getall")]
        public IActionResult GetAll()
        {
            try
            {

                return Ok(_repo.Getall());

            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("Search/{Iname}")]
        public IActionResult SearchItems(string Iname)
        {
            try
            {
                return Ok(_repo.search(Iname));


            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetCart/{Iname}")]
        public IActionResult GetCart(int Iname)
        {
            try
            {
                return Ok(_repo.Getcart(Iname));


            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetAllCart/{id}")]
        public IActionResult GetAllCart(int id)
        {
            try
            {
                return Ok(_repo.GetAllcart(id));


            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("CheckCart/{id}")]
        public IActionResult check(int id)
        {
            try
            {
                return Ok(_repo.RemoveCart(id));


            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteCartItem/{id}")]
        public IActionResult delete(int id)
        {
            try
            {
                _repo.Removecartitem(id);
                return Ok();


            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("History/{bid}")]
        public IActionResult TransactionHistory(int bid)
        {
            try
            {

                return Ok(_repo.PurchaseHistory(bid));

            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetC")]
        public IActionResult GetCategories()
        {
            try
            {
                return Ok(_repo.GetCategories());



            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetS/{categoryid}")]
        public IActionResult GetSubCategories(int categoryid)
        {
            try
            {
                return Ok(_repo.GetSubCategories(categoryid));


            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }

        }
    }
}