using System;
using System.Collections.Generic;

namespace emart_buyerservice.Models
{
    public partial class Addcart
    {
        public int Buyerid { get; set; }
        public int Itemid { get; set; }
        public string Itemname { get; set; }
        public int Price { get; set; }
        public string Imagename { get; set; }
        public int Cartid { get; set; }

        public virtual Buyer Buyer { get; set; }
    }
}
