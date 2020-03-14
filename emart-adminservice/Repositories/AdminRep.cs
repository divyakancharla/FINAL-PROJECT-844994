using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using emart_adminservice.Models;
using emart_adminservice.Repositories;
namespace emart_adminservice.Repositories
{
    public class AdminRep:IAdmin
    {
        private readonly emartDBContext conn;
        public AdminRep(emartDBContext con)
        {
            conn = con;
        }
       
        public void AddCategories(Category cat)
        {
             conn.Category.Add(cat);
            conn.SaveChanges();
        }
        public void AddSubCategories(SubCategory cat)
        {
            conn.SubCategory.Add(cat);
            conn.SaveChanges();
        }

        public void DeleteCat(Category cat)
        {
            
            conn.Category.Remove(cat);
            conn.SaveChanges();
        }

        public void DeleteSubCat(SubCategory cat)
        {
            conn.SubCategory.Remove(cat);
            conn.SaveChanges();
        }

        public Category getCategories(int cid)
        {
            return conn.Category.SingleOrDefault(e => e.Cid == cid);
        }

        public SubCategory getSubCategories(int sid)
        {
            return conn.SubCategory.SingleOrDefault(e => e.Cid == sid);

        }

        public void UpdateCat(Category cat)
        {
            
            conn.Category.Update(cat);
            conn.SaveChanges();
        }
        public List<Category> getcat()
        {
            return conn.Category.ToList();
            
        }
        public List<SubCategory> getsubcat()
        {
            return conn.SubCategory.ToList();

        }
        public void UpdateSubCat(SubCategory cat)
        {
            
            conn.SubCategory.Update(cat);
            conn.SaveChanges();
        }
    }
}
