using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using emart_sellerservice.Models;
namespace emart_sellerservice.Repositories
{

    public interface ISeller
    {
       public void editprofile(Seller profile);
        public Seller MyProfile(int id);
        
        
    }
}
