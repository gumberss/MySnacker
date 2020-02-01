using System;
using System.Collections.Generic;

namespace MySnacker.Domain.ViewModels
{
    public class SnackData
    {
        public Guid Id { get; set; }

        public String Name { get; set; }

        public IEnumerable<FlavorData> Flavors { get; set; }

        public IEnumerable<MeasureData> Measures { get; set; }

        public IEnumerable<AdditionalData> Additional { get; set; }
    }

    public class FlavorData
    {
        public Guid Id { get; set; }

        public String Name { get; set; }

        public long PreparationTime { get; set; }
    }

    public class MeasureData
    {
        public Guid Id { get; set; }

        public String Size { get; set; }

        public decimal Price { get; set; }

        public long PreparationTime { get; set; }

        public String Description { get; set; }
    }

    public class AdditionalData
    {
        public Guid Id { get; set; }

        public String Name { get; set; }

        public decimal AdditionalPrice { get; set; }

        public long PreparationTime { get; set; }
    }
}
