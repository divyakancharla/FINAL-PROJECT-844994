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
    public class ItemController : ControllerBase
    {
        private readonly IItem conn;
        public ItemController(IItem con)
        {
            conn = con;
        }
        [HttpPost]
        [Route("additem")]
        public IActionResult additem(Items item)
        {
            try
            {
                conn.Additem(item);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("viewitem/{id}")]
        public IActionResult viewitem(int id)
        {
            try
            {
                
                return Ok(conn.viewitem(id));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpDelete]
        [Route("deleteitem/{id}")]
        public IActionResult delete(int id)
        {
            try
            {
                conn.deleteitems(id);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPut]
        [Route("updateitem")]
        public IActionResult update(Items item)
        {
            try
            {
                conn.updateitems(item);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("getitem/{id}")]
        public IActionResult GetByid(int id)
        {
            try
            {
                
                return Ok(conn.GetItemById(id));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("getcategory")]
        public IActionResult GetCategory()
        {
            try
            {

                return Ok(conn.GetC());
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("getsubcategory")]
        public IActionResult GetSubCategory()
        {
            try
            {

                return Ok(conn.GetS());
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("getsubcategory/{id}")]
        public IActionResult GetSubCategoryBasedOnCatId(int id)
        {
            try
            {

                return Ok(conn.GetSub(id));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
    }
}