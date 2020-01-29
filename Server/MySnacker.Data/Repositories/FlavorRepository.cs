using MySnacker.Data.Contexts;
using MySnacker.Domain.Entities;
using MySnacker.Domain.Interfaces.Data;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MySnacker.Data.Repositories
{
    public class FlavorRepository : IFlavorRepository
    {
        private readonly SnackerContext _context;

        public FlavorRepository(SnackerContext context)
        {
            _context = context;
        }

        public IEnumerable<Flavor> GetFlavorsBySnack(Guid snackId)
        {
            return _context.Flavors
                .Where(x => x.SnackId == snackId)
                .ToList();
        }
    }
}
