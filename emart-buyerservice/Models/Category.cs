using System;
using System.Collections.Generic;

namespace emart_buyerservice.Models
{
    public partial class Category
    {
        public Category()
        {
            Items = new HashSet<Items>();
            SubCategory = new HashSet<SubCategory>();
        }

        public int Cid { get; set; }
        public string Cname { get; set; }
        public string Cdet { get; set; }

        public virtual ICollection<Items> Items { get; set; }
        public virtual ICollection<SubCategory> SubCategory { get; set; }
    }
}
