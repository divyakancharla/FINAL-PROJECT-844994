using System;
using System.Collections.Generic;

namespace emart_userservice.Models
{
    public partial class PurchaseHistory
    {
        public int Pid { get; set; }
        public int? Buyerid { get; set; }
        public int? Sellerid { get; set; }
        public string TransactionType { get; set; }
        public int? Itemid { get; set; }
        public int? Numberofitems { get; set; }
        public DateTime? Datetime { get; set; }
        public string Remarks { get; set; }
        public string Transactionstatus { get; set; }

        public virtual Buyer Buyer { get; set; }
        public virtual Items Item { get; set; }
        public virtual Seller Seller { get; set; }
    }
}
