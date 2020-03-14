using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using emart_buyerservice.Models;
using emart_buyerservice.Repositories;
namespace emart_buyerservice.Repositories
{
    public class BuyerRep : IBuyer
    {
        private readonly emartDBContext conn;
        public BuyerRep(emartDBContext con)
        {
            conn = con;
        }
        public void BuyItem(PurchaseHistory item)
        {
            conn.Add(item);
            conn.SaveChanges();
        }

        public void Editprofile(Buyer buyer)
        {
            conn.Buyer.Update(buyer);
            conn.SaveChanges();
        }

        public Buyer GetProfile(int bid)
        {
            Buyer b = conn.Buyer.SingleOrDefault(e => e.Id == bid);
            return b;
        }
        public List<Buyer> Getall()
        {
            return conn.Buyer.ToList();
        }
        public List<PurchaseHistory> PurchaseHistory(int bid)
        {
            var b = conn.PurchaseHistory.Where(e => e.Buyerid == bid).ToList();
            return b;
        }

        public List<Items> search(string items)
        {
            var e = conn.Items.Where(e => e.Itemname == items).ToList();
            return e;
        }
        public List<Category> GetCategories()
        {
            return conn.Category.ToList();
        }

        public List<Addcart> Getcart(int id)
        {
            var e = conn.Addcart.Where(e => e.Buyerid == id).ToList();
            return e;
        }

        public List<SubCategory> GetSubCategories(int categoryid)
        {
            var subCategory = conn.SubCategory.Where(e => e.Cid == categoryid).ToList();
            return subCategory;
        }

        public void addcart(Addcart cart)
        {
            conn.Add(cart);
            conn.SaveChanges();
        }

        public int GetAllcart(int id)
        {
            int e = conn.Addcart.Where(e=>e.Itemid==id).ToList().Count;
            return e;
           
        }

        public PurchaseHistory RemoveCart(int id)
        {
            PurchaseHistory p = conn.PurchaseHistory.SingleOrDefault(e => e.Itemid == id);
            return p;
        }
        public void Removecartitem(int id)
        {
            var r = conn.Addcart.Find(id);
            conn.Addcart.Remove(r);
            conn.SaveChanges();
        }

        
    }
}
