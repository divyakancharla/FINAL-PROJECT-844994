using System;
using System.Collections.Generic;
using System.Text;
using emart_adminservice.Models;
using emart_adminservice.Repositories;
using NUnit.Framework;
using emart_sellerservice.Models;
using emart_sellerservice.Repositories;
namespace EmartTesting
{
    class AdminTesting
    {
        AdminRep _repo;
        ItemRep _rep;
        [SetUp]
        public void SetUp()
        {
            _repo = new AdminRep(new emart_adminservice.Models.emartDBContext());
            _rep = new ItemRep(new emart_sellerservice.Models.emartDBContext());
        }
        [Test]
        [Description("Test Add Category")]
        public void TestAddCategory()
        {
            _repo.AddCategories(new emart_adminservice.Models.Category()
            {
                Cid =112,
                Cname = "Biryani",
                Cdet = "spicy and tasty",
                Items = {}

            });
            var result = _repo.getCategories(12);
            Assert.NotNull(result);
        }
        [Test]
        public void TestAddSubcategory()
        {
            _repo.AddSubCategories(new emart_adminservice.Models.SubCategory()
            {
                Subid = 0005,
                Subname = "Prawn Biryani",
                Cid = 12,
                Subdet = "adds taste",
                Gst = "243"
            });
            var result = _repo.getSubCategories(005);
            Assert.NotNull(result);
        }
        [Test]
        public void TestDeleteCategory()
        {
           emart_adminservice.Models.Category c = new emart_adminservice.Models.Category()
           {Cid=112,Cname="Biryani",Cdet="spicy and tasty"};

            _repo.DeleteCat(c);
            var result = _repo.getCategories(12);
            Assert.NotNull(result);
        }
        [Test]
        public void TestDeleteSubcategory()
        {
           emart_adminservice.Models.SubCategory b = new emart_adminservice.Models.SubCategory()
            {
                Subid = 0,
                Subname = "Prawn Biryani",
                Cid = 11,
                Subdet = "adds taste",
                Gst = "243"
            };
            _repo.DeleteSubCat(b);
            var result = _repo.getSubCategories(0005);
            Assert.NotNull(result);
        }
        [Test]
        public void TestViewCategory()
        {
            var result = _rep.GetC();
            Assert.Null(result);
        }
        [Test]
        public void TestViewSubCategory()
        {
            var result = _rep.GetS();
            Assert.Null(result);
        }
        [Test]
        public void TestUpdatecat()
        {

            emart_adminservice.Models.Category cat = _repo.getCategories(2);
            cat.Cname= "Chocolates";
            _repo.UpdateCat(cat);
            emart_adminservice.Models.Category category1 = _repo.getCategories(2);
            Assert.AreSame(cat, category1);

        }
        [Test]
        public void TestUpdatescat()
        {

            emart_adminservice.Models.SubCategory cat = _repo.getSubCategories(2);
            cat.Subname ="olates";
            _repo.UpdateSubCat(cat);
            emart_adminservice.Models.SubCategory category1 = _repo.getSubCategories(2);
            Assert.AreSame(cat, category1);

        }
    }
}
