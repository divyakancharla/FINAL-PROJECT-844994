using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using emart_sellerservice.Models;
namespace emart_sellerservice.Repositories
{
    public class ItemRep : IItem
    {
        private readonly emartDBContext _context;
        public ItemRep(emartDBContext conn)
        {
            _context = conn;
        }
        public void Additem(Items item)
        {
            _context.Add(item);
            _context.SaveChanges();

        }

        public void deleteitems(int id)
        {
            Items e = _context.Items.Find(id);
            _context.Remove(e);
            _context.SaveChanges();
        }

        public Items GetItemById(int id)
        {
            
            return _context.Items.Find(id);
        }

        public void updateitems(Items item)
        {

            _context.Items.Update(item);
            _context.SaveChanges();

        }
        public List<Category> GetC()
        {
            return _context.Category.ToList();
        }
        public List<SubCategory> GetS()
        {
            return _context.SubCategory.ToList();
        }
        
        public List<Items> viewitem(int id)
        {
            var e = _context.Items.Where(e => e.Sellerid == id).ToList();
            //foreach (var s in e)
            //{
            //    return e;
            //}
            return e;
            //return _context.Items.ToList();
        }
        public List<SubCategory> GetSub(int id)
        {
            var e = _context.SubCategory.Where(e => e.Cid == id).ToList();
            //foreach (var s in e)
            //{
            //    return e;
            //}
            return e;
            //return _context.Items.ToList();
        }
    }
}
