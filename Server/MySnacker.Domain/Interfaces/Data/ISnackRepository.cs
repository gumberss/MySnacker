using MySnacker.Domain.Entities;
using MySnacker.Domain.ViewModels;
using System;
using System.Collections.Generic;

namespace MySnacker.Domain.Interfaces.Data
{
    public interface ISnackRepository
    {
        Snack GetSnackWithData(Guid id);

        IEnumerable<SnackListData> GetSnackList();
    }
}
