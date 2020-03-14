using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using emart_adminservice.Models;
using emart_adminservice.Repositories;
using Microsoft.AspNetCore.Authorization;

namespace emart_buyerservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class AdminController : ControllerBase
    {
        private readonly IAdmin _repo;
        public AdminController(IAdmin repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("AddC")]
        public IActionResult AddCategory(Category category)
        {
            try
            {
                _repo.AddCategories(category);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("AddS")]
        public IActionResult AddSubCategory(SubCategory subcategory)
        {
            try
            {
                _repo.AddSubCategories(subcategory);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetCategoryById")]
        public IActionResult GetByCatId(int subcategory)
        {
            try
            {
                _repo.getCategories(subcategory);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetCategory")]
        public IActionResult Getcat()
        {
            try
            {
                _repo.getcat();
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }

        [HttpGet]
        [Route("GetSubCategory")]
        public IActionResult Getsubcat()
        {
            try
            {
                _repo.getsubcat();
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }

        [HttpGet]
        [Route("GetSubCategoryById")]
        public IActionResult GetBySubCatId(int subcategory)
        {
            try
            {
                _repo.getSubCategories(subcategory);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpDelete]
        [Route("deleteSubCategory")]
        public IActionResult delSubCat(SubCategory sub)
        {
            try
            {
                _repo.DeleteSubCat(sub);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpDelete]
        [Route("deleteCategory")]
        public IActionResult delCat(Category sub)
        {
            try
            {
                _repo.DeleteCat(sub);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPut]
        [Route("updatecat")]

        public IActionResult UpdateCat(Category cat)
        {
            try
            {
                _repo.UpdateCat(cat);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpPut]
        [Route("updatesubcat")]

        public IActionResult UpdateSubCat(SubCategory sub)
        {
            try
            {
                _repo.UpdateSubCat(sub);
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
    }
}