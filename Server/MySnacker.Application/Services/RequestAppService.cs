using MySnacker.Data.Contexts;
using MySnacker.Domain.Entities;
using MySnacker.Domain.Interfaces.ApplicationServices;
using MySnacker.Domain.Interfaces.Data;
using Microsoft.EntityFrameworkCore;

namespace MySnacker.Application.Services
{
    public class RequestAppService : IRequestAppService
    {
        private readonly IRequestRepository _requestRepository;
        private readonly DbContext _context;

        public RequestAppService(IRequestRepository requestRepository, SnackerContext context)
        {
            _requestRepository = requestRepository;

            _context = context;
        }

        public void Store(Request request)
        {
            using (_context)
            {
                _requestRepository.Store(request);

                _context.SaveChanges();
            }
        }
    }
}
