using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using emart_sellerservice.Models;
namespace emart_sellerservice.Repositories
{
    public class SellerRep:ISeller
    {
        private readonly emartDBContext _context;
        public SellerRep(emartDBContext conn)
        {
            _context = conn;
        }

        public void editprofile(Seller profile)
        {
            _context.Seller.Update(profile);
            _context.SaveChanges();
          
        }

        public Seller MyProfile(int sid)
        {
            Seller s=_context.Seller.Find(sid);
            return s;
        }
    }
}
