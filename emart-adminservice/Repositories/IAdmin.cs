using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using emart_adminservice.Models;
using emart_adminservice.Repositories;
namespace emart_adminservice.Repositories
{
    public interface IAdmin
    {
        public void AddCategories(Category cat);
        public void AddSubCategories(SubCategory cat);
       public SubCategory getSubCategories(int subcategory);
       public Category getCategories(int subcategory);
        public void UpdateCat(Category cat);
        public void UpdateSubCat(SubCategory cat);
        public void DeleteCat(Category cat);
        public void DeleteSubCat(SubCategory cat);
         List<Category> getcat();
        List<SubCategory> getsubcat();

    }
}
