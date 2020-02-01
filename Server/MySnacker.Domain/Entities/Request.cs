using System;
using System.Collections.Generic;

namespace MySnacker.Domain.Entities
{
    public class Request
    {
        public Guid Id { get; set; }

        public Guid MeasureId { get; set; }

        public Measure Measure { get; set; }

        public Guid FlavorId { get; set; }

        public Flavor Flavor { get; set; }

        public Guid SnackId { get; set; }

        public Snack Snack { get; set; }

        public long PreparationTime { get; set; }

        public decimal TotalPrice { get; set; }

        public List<RequestAdditional> RequestAdditional { get; set; }
    }
}
