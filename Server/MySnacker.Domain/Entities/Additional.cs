using System;
using System.Collections.Generic;

namespace MySnacker.Domain.Entities
{
    public class Additional
    {
        public Guid Id { get; set; }

        public String Name { get; set; }

        public decimal AdditionalPrice { get; set; }

        public long PreparationTime { get; set; }

        public List<RequestAdditional> RequestAdditional { get; set; }

        public Guid SnackId { get; set; }

        public Snack Snack { get; set; }
    }
}
