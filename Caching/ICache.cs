using System;
using System.Collections.Generic;
using System.Text;

namespace Caching
{
    public interface ICache
    {
        bool Contains(string key);//key varmı yokmu diye control ettiğimiz metot
        void Add<T>(string key, T source);//cache key'i ile birlikte cache model'i alıp cache'e ekleyen metot
        T Get<T>(string key);//key parametresi alarak cache'de ki data yı return eden metot
        void Remove(string key);//key parametresine göre mevcut cache'i silen metot
    }
}
