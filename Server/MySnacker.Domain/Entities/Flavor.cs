using System;
using System.Collections.Generic;

namespace MySnacker.Domain.Entities
{
    public class Flavor
    {
        public Guid Id { get; set; }

        public String Name { get; set; }

        public long PreparationTime { get; set; }

        public Guid SnackId { get; set; }

        public Snack Snack { get; set; }

        public List<Request> Requests { get; set; }
    }
}
