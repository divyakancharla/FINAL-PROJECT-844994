using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace emart_userservice
{
    public class Token
    {
        public int Sellerid { get; set; }
        public int Buyerid { get; set; }
        public string token { get; set; }
        public string message { get; set; }
    }
}
