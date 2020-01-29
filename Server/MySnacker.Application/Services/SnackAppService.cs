using AutoMapper;
using MySnacker.Data.Contexts;
using MySnacker.Domain.Interfaces.ApplicationServices;
using MySnacker.Domain.Interfaces.Data;
using MySnacker.Domain.ViewModels;
using System;
using System.Collections.Generic;

namespace MySnacker.Application.Services
{
    public class SnackAppService : ISnackAppService
    {
        private readonly ISnackRepository _snackRepository;
        private readonly SnackerContext _context;
        private readonly IMapper _mapper;

        public SnackAppService(ISnackRepository snackRepository, SnackerContext context, IMapper mapper)
        {
            _snackRepository = snackRepository;
            _context = context;
            _mapper = mapper;
        }

        public IEnumerable<SnackListData> GetSnackList()
        {
            using (_context)
            {
                return _snackRepository.GetSnackList();
            }
        }

        public SnackData GetSnackWithData(Guid id)
        {
            using (_context)
            {
                var snack = _snackRepository.GetSnackWithData(id);

                return _mapper.Map<SnackData>(snack);
            }
        }
    }
}
