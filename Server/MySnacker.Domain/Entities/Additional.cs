using System;

namespace MySnacker.Domain.Entities
{
    public class Additional
    {
        public Guid Id { get; set; }

        public String Name { get; set; }

        public decimal AdditionalPrice { get; set; }

        public long PreparationTime { get; set; }
    }
}
