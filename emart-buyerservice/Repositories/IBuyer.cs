using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using emart_buyerservice.Repositories;
using emart_buyerservice.Models;
namespace emart_buyerservice.Repositories
{
  public  interface IBuyer
    {
        List<Items> search(string items);
        void BuyItem(PurchaseHistory purchase);
        void Editprofile(Buyer buyer);
        Buyer GetProfile(int bid);
        List<Category> GetCategories();
        List<SubCategory> GetSubCategories(int categories);
        List<Buyer> Getall();
        List<PurchaseHistory> PurchaseHistory(int bid);
        void addcart(Addcart cart);
        List<Addcart> Getcart(int id);
         int GetAllcart(int id);
         PurchaseHistory RemoveCart(int id);
       void Removecartitem(int id);
    }
}
