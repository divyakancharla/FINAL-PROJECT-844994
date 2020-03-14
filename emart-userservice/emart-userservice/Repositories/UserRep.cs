using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using emart_userservice.Models;
using emart_userservice.Repositories;
namespace emart_userservice.Repositories
{
    public class UserRep : IUser
    {
        private readonly emartDBContext _context;
        public UserRep(emartDBContext con)
        {
            _context = con;
        }
        public void addb(Buyer item)
        {
            _context.Add(item);
            _context.SaveChanges();
        }

        public void adds(Seller items)
        {
            _context.Add(items);
            _context.SaveChanges();
        }

        public Buyer loginb(string name, string pass)
        {
           var s = _context.Buyer.SingleOrDefault(e => e.Username == name && e.Password == pass);
            return s;
        }
        public Seller logins(string name, string pass)
        {
            var s = _context.Seller.SingleOrDefault(e => e.Username == name && e.Password == pass);
            return s;
        }
    }
}
