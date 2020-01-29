using MySnacker.Domain.Entities;
using System;
using System.Collections.Generic;

namespace MySnacker.Domain.Interfaces.Data
{
    public interface IMeasureRepository
    {
        IEnumerable<Measure> GetMeasuresBySnack(Guid snackId);
    }
}
