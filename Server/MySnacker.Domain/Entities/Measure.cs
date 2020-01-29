using System;
using System.Collections.Generic;
using System.Text;

namespace MySnacker.Domain.Entities
{
    public class Measure
    {
        public Guid Id { get; set; }

        public String Size { get; set; }

        public decimal Price { get; set; }

        public long PreparationTime { get; set; }

        public String Description { get; set; }

        public Guid SnackId { get; set; }

        public Snack Snack { get; set; }

        public List<Request> Requests { get; set; }
    }
}
