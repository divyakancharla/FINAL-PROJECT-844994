using System;
using System.Collections.Generic;

namespace emart_adminservice.Models
{
    public partial class Buyer
    {
        public Buyer()
        {
            Addcart = new HashSet<Addcart>();
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Mobilenumber { get; set; }
        public DateTime? Createdatetime { get; set; }

        public virtual ICollection<Addcart> Addcart { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
