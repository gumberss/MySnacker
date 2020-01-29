using System;
using System.Collections.Generic;

namespace MySnacker.Domain.Entities
{
  public   class Snack
    {
        public Guid Id { get; set; }

        public String Name { get; set; }

        public List<Request> Requests { get; set; }

        public List<Flavor> Flavors { get; set; }

        public List<Measure> Measures { get; set; }
    }
}
