using System;

namespace MySnacker.Domain.Entities
{
    public class RequestAdditional
    {
        public Guid RequestId { get; set; }

        public Request Request { get; set; }

        public Guid AdditionalId { get; set; }

        public Additional Additional { get; set; }
    }
}
