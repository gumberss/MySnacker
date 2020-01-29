using MySnacker.Data.Contexts;
using MySnacker.Domain.Interfaces.Data;
using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using MySnacker.Domain.Entities;
using MySnacker.Domain.ViewModels;
using System.Collections.Generic;

namespace MySnacker.Data.Repositories
{
    public class SnackRepository : ISnackRepository
    {
        private readonly SnackerContext _context;

        public SnackRepository(SnackerContext context)
        {
            _context = context;
        }

        public IEnumerable<SnackListData> GetSnackList()
            => _context.Snacks
                .Select(x => new SnackListData { Name = x.Name })
                .ToList();

        public Snack GetSnackWithData(Guid id)
            => _context.Snacks
                .Include(x => x.Measures)
                .Include(x => x.Flavors)
                .FirstOrDefault(x => x.Id == id);
    }
}
