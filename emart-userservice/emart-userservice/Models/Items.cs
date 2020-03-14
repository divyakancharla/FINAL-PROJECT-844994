using System;
using System.Collections.Generic;

namespace emart_userservice.Models
{
    public partial class Items
    {
        public Items()
        {
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public int Itemid { get; set; }
        public int? Cid { get; set; }
        public int? Subid { get; set; }
        public int Price { get; set; }
        public string Itemname { get; set; }
        public string Itemdet { get; set; }
        public int? Stocknumber { get; set; }
        public string Remarks { get; set; }
        public int? Sellerid { get; set; }
        public string Imagename { get; set; }

        public virtual Category C { get; set; }
        public virtual Seller Seller { get; set; }
        public virtual SubCategory Sub { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
