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
                .Select(x => new SnackListData { Id = x.Id, Name = x.Name, Image = x.Image })
                .ToList();

        public Snack GetSnackWithData(Guid id)
            => _context.Snacks
                .Include(x => x.Measures)
                .Include(x => x.Flavors)
                .Include(x => x.Additional)
                .FirstOrDefault(x => x.Id == id);
    }
}
