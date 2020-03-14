using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using emart_userservice.Models;
namespace emart_userservice.Repositories
{
   public interface IUser
    {
       // List<Buyer> getall();
        public void addb(Buyer item);
        public void adds(Seller items);

        public Buyer loginb(string name, string pass);
        public Seller logins(string name, string pass);

    }
}
