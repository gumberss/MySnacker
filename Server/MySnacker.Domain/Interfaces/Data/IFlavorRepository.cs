using MySnacker.Domain.Entities;
using System;
using System.Collections.Generic;

namespace MySnacker.Domain.Interfaces.Data
{
    public interface IFlavorRepository
    {
        IEnumerable<Flavor> GetFlavorsBySnack(Guid snackId);
    }
}
