using MySnacker.Data.Contexts;
using MySnacker.Domain.Entities;
using MySnacker.Domain.Interfaces.Data;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MySnacker.Data.Repositories
{
    public class MeasureRepository : IMeasureRepository
    {
        private readonly SnackerContext _context;

        public MeasureRepository(SnackerContext context)
        {
            _context = context;
        }

        public IEnumerable<Measure> GetMeasuresBySnack(Guid snackId)
        {
            return _context.Mesures
                .Where(x => x.SnackId == snackId)
                .ToList();
        }
    }
}
