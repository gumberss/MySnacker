using MySnacker.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace MySnacker.Domain.DTOs
{
    public class SnackDataDTO
    {
        public Flavor Flavor { get; set; }

        public Measure Measure { get; set; }
    }
}
