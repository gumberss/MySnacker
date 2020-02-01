using System;
using System.Collections.Generic;

namespace MySnacker.Domain.DTOs
{
    public class RequestDTO
    {
        public Guid Id { get; set; }

        public long PreparationTime { get; set; }

        public decimal TotalPrice { get; set; }

        public FlavorDTO Flavor { get; set; }

        public MeasureDTO Measure { get; set; }

        public List<AdditionalDTO> Additional { get; set; }
    }

    public class AdditionalDTO
    {
        public Guid Id { get; set; }
    }

    public class MeasureDTO
    {
        public Guid Id { get; set; }
    }

    public class FlavorDTO
    {
        public Guid Id { get; set; }
    }
}
