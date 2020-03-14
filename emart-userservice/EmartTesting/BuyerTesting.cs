using System;
using System.Collections.Generic;
using System.Text;
using emart_buyerservice.Repositories;
using emart_buyerservice.Models;
using NUnit.Framework;

namespace EmartTesting
{
   
    class BuyerTesting
    {
        BuyerRep _repo;
        [SetUp]
        public void Set()
        {
            _repo = new BuyerRep(new emartDBContext());
        }
        [Test]
        public void Search()
        {
            string name = "laptop";
            List<Items> result=_repo.search(name);
            Assert.NotNull(result);
               Assert.Greater(result.Count,0);
            
        }
        [Test]
        public void Myprofile()
        {
            int id = 101;
            Buyer b=_repo.GetProfile(id);
            Assert.NotNull(b);
        }
        [Test]
        public void EditProfile()
        {
            Buyer item = _repo.GetProfile(0);
            
            item.Username = "200";
            _repo.Editprofile(item);
            Buyer item1 = _repo.GetProfile(0);
            Assert.AreSame(item, item1);
        }
        [Test]
        public void Addcart()
        {
            _repo.addcart(new Addcart()
            {
                Buyerid = 0,
                Itemid=13,
                Itemname="pasta",
                Price=20000,
                Imagename="pasta.jpg",
                Cartid=103,
                Buyer = {}
            });
            var result = _repo.Getcart(12);
            Assert.IsEmpty(result);

        }
        [Test]
        public void viewcart()
        {
            int id = 0;
            List<Addcart> b=_repo.Getcart(id);
            Assert.NotNull(b);
            Assert.Greater(b.Count, 0);
        }
        [Test]
        public void Buy()
        {
            _repo.BuyItem(new PurchaseHistory()
            {
                Buyerid = 34,
                Itemid = 820,
                Numberofitems = 2,
                Sellerid = 30,
                Transactionstatus = "paid",
                TransactionType = "cash",
                Pid = 213,
                Remarks = "no",
                Datetime = DateTime.Now
            });
            Assert.IsNotNull(_repo);
        }

        [Test]
        public void Getsubcat()
        {
            int id = 45;
           List<SubCategory> c=_repo.GetSubCategories(id);
            Assert.NotNull(c);
            Assert.Greater(c.Count, 0);
        }
        [Test]
        public void Getcat()
        {
         
            List<Category> c = _repo.GetCategories();
            Assert.NotNull(c);
            Assert.Greater(c.Count, 0);
        }
        [Test]
        public void Delcart()
        {
           
             _repo.Removecartitem(113);
            var result = _repo.Getcart(113);
            Assert.NotNull(result);
        }
    }
}
