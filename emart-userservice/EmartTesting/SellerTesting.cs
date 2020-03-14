using System;
using System.Collections.Generic;
using System.Text;
using emart_sellerservice.Models;
using emart_sellerservice.Repositories;
using NUnit.Framework;
using NUnit.Framework.Internal;

namespace EmartTesting
{
    class SellerTesting
    {
        SellerRep _repo;
        ItemRep _rep;
        [SetUp]
        public void setup()
        {
            _repo = new SellerRep(new emartDBContext());
            _rep = new ItemRep(new emartDBContext());
        }
        [Test]
        public void Myprofile()
        {
            int id = 30;
            Seller b = _repo.MyProfile(id);
            Assert.NotNull(b);
        }
        [Test]
        public void EditProfile()
        {
            Seller item = _repo.MyProfile(0);

            item.Username = "deep";
            _repo.editprofile(item);
            Seller item1 = _repo.MyProfile(0);
            Assert.AreSame(item, item1);
        }
        [Test]
        public void additem()
        {
            _rep.Additem(new Items()
            {
                Itemid = 01,
                Itemname = "noodles",
                Itemdet = "home made",
                Price = 3123,
                Stocknumber = 6,
                Remarks = "no",
                Cid = 45,
                Subid = 32,
                Sellerid = 30,
                Imagename = "noodle.jpg"
            });
            var res = _rep.GetItemById(101);
            Assert.NotNull(res);
        }
        [Test]
        public void viewitem()
        {
            List<Items> c = _rep.viewitem(30);
            Assert.NotNull(c);
            Assert.Greater(c.Count, 0);
        }
        [Test]
        public void viewitemid()
        {
            var c = _rep.GetItemById(01);
            Assert.NotNull(c);
        }
        public void Edititem()
        {
            Items item = _rep.GetItemById(961);
            item.Subid = 0;
            _rep.updateitems(item);
            Items item1 = _rep.GetItemById(961);
            Assert.AreSame(item, item1);
        }
        [Test]
        public void Deliten()
        {

            _rep.deleteitems(0);
            var result = _rep.GetItemById(0);
            Assert.IsNull(result);
        }
        [Test]
        public void Getcat()
        {
            List<Category> c = _rep.GetC();
            Assert.NotNull(c);
            Assert.Greater(c.Count, 0);
        }
        [Test]
        public void GetSubcat()
        {

            List<SubCategory> c = _rep.GetS();
            Assert.NotNull(c);
            Assert.Greater(c.Count, 0);
        }
    }
}
