using System;
using System.Collections.Generic;
using System.Text;
using emart_userservice.Models;
using emart_userservice.Repositories;
using NUnit.Framework;
using emart_buyerservice.Repositories;
namespace EmartTesting
{
    class Usertesting
    {
        UserRep _repo;
        [SetUp]
        public void Set()
        {
            _repo = new UserRep(new emartDBContext());
        } 
        [Test]
        public void registerBuyer()
        {
            Buyer b = new Buyer()
            {
                Username = "divya",
                Password = "1234",
                Id = 51,
                Createdatetime = System.DateTime.Now,
                Email = "abc@sf",
                Mobilenumber = "9325534223",
                PurchaseHistory = { },
                Addcart = { }
            };
            _repo.addb(b);
                
            Assert.IsNotNull(b); 
        }
        [Test]
        public void registerSeller()
        {
            Seller s = new Seller()
            {
                Username = "divya",
                Password = "1234",
                Id = 51,
                Companyname = "Spyry",
                Email = "abc@sf",
                Mobilenumber = "9325534223",
                Brief = "hgh",
                Postaladdress = "dr.no:2-15",
                Gstin = "35465767",
                Website = "gfgf",
                Items = { },
                PurchaseHistory = { },
            };
            _repo.adds(s);
            
            Assert.IsNotNull(s);
        }
        [Test]
        public void logb()
        {
            string name = "deepu";
            string pass = "1234";
            Buyer b=_repo.loginb(name, pass);
            Assert.IsNotNull(b);
        }
        [Test]
        public void logs()
        {
            string name = "chu";
            string pass = "555";
            Seller b = _repo.logins(name, pass);
            Assert.IsNotNull(b);
        }
    }
}
