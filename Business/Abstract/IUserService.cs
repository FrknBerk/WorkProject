using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IUserService
    {
        List<User> GetAll();
        bool Add(User user);
        bool Update(User user);
        void Delete(User user);
    }
}
