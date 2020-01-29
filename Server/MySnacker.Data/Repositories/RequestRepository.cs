using Microsoft.EntityFrameworkCore;
using MySnacker.Data.Contexts;
using MySnacker.Domain.Entities;
using MySnacker.Domain.Interfaces.Data;

namespace MySnacker.Data.Repositories
{
    public class RequestRepository : IRequestRepository
    {
        private readonly DbContext _context;

        public RequestRepository(SnackerContext context)
        {
            _context = context;
        }

        public void Store(Request request)
        {
            _context.Add(request);
        }
    }
}
