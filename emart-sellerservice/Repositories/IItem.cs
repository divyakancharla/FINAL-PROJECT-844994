using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using emart_sellerservice.Models;
namespace emart_sellerservice.Repositories
{
   public interface IItem
    {
        public void Additem(Items item);
        public List<Items> viewitem(int id);
        public void deleteitems(int id);
        public void updateitems(Items item);
        public Items GetItemById(int id);
        public List<Category> GetC();
        public List<SubCategory> GetS();
        public List<SubCategory> GetSub(int id);

    }
}
