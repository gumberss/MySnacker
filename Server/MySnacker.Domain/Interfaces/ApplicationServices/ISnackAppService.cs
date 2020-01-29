using MySnacker.Domain.ViewModels;
using System;
using System.Collections.Generic;

namespace MySnacker.Domain.Interfaces.ApplicationServices
{
    public interface ISnackAppService
    {
        SnackData GetSnackWithData(Guid id);

        IEnumerable<SnackListData> GetSnackList();
    }
}
