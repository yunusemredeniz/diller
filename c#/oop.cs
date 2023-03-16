using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace csharp
{
     public class Program
        {
        public static void Main(string[] args)
        {
            foreach (object item in sayilar)
            {
            Console.WriteLine(item);
            }
            Math.Ceiling(2.25);//yukarı yuvarlar
            Math.Floor(2.25);//aşağı
            Math.Round(2.25);//en yakına
            Math.Pow(2,5);//2nin 5 üssü
            Math.Sqrt(16);//karakök
            System.Console.WriteLine(DateTime.Now   );//fullzaman
            DateTime.Today();   //tarih
            DateTime t1=DateTime.Now();
            DateTime t2=new DateTime(2000,1,1);
            TimeSpan span=t1-t2;
            System.Console.WriteLine(span.Days);
            System.Console.WriteLine(span.Hours);
            Random random=new Random();
            System.Console.WriteLine(50,100);//(100) 0 la 99 arasında
            int sonuc=  metod4(5,7);
            if  (sonuc<10){
            System.Console.WriteLine("küçük");
            }
        }
        static        public void metod(){

              }
        static  public void metod2(int sayi)
             {

             }
        static  public int metod3(){
            return 10;

            }
        ///<summary>
        ///bu bir methoddur
        ///</summary>
        ///<param name="sayi2"></param>
         static public int metod4(int sayi2 ,int sayi3=0){ //defaultlar sağda
         ///<summary>
        ///bu bir propertidir
        ///</summary>
            int sonuc= sayi2+sayi3;
            System.Console.WriteLine(sonuc);
            return sonuc;
            } 
         
        public class myclass
            {
               int yasi;
                public int Yasi{
                   get
                   {
                   return yasi;
                   }
                   set
                   {
                   yasi=value;
                   }
                }
            }
        class myclass2{
               int a;
               public void x(int a){
               this.a;//üsteki a
                }
            }
        class myclass3{
               int a;
               public aget(){
               return this.a;
                } 
                public Aset(int value){
                this.a=value;
                }
                public int A    //propfull
                {
                   get { return a; }
                   set { a= value; }
                }
            }    
        class myclass4{
                public myclass4()
                {
                System.Console.WriteLine("1. contracter çalıştı");
                }
                public myclass4(int a):this() //ilk önce üsteki contracter çalışır
                {System.Console.WriteLine($"2.contracter çalıştı:={a}");
                }
            }           
            //dotnet toll install --global dotnet-ef

        public class Deneme {
        //{break döngülerden çıkış
        //return çıkış
        //continue döngülerde o bölümü atlar
        //virtual değiştirilebir;
        //        owerride ile
             string adi;
             public string Adi
            {
            get { return adi.Substring(0, 2); }
            set { adi = value.ToUpper(); }
            }
        }
        public class programi
        {
        //Deneme deneme = new Deneme();
        //deneme.adi="yunus";
        //    Singleton nesne1 = new Singleton.Nesnever();
        //Singleton nesne2 = new Singleton.Nesnever();
        //    if (nesne1.Equals(nesne2))
	       // {MessageBox.Show("test");}
                                  //todo açıklama task list e gözükür
                // propfull
                                    //abstract //override edilir { scope skop
             const double pi = 3.15;
             object adi = "yunus";
             private int myVar;
             public int MyProperty
               {
               get { return myVar; }
               set { myVar = value; }
               }
             string x = "123";
             short x2 = short.Parse(x);
             string e = "25";
             int e2 = Convert.ToInt32(e);
            //Console.WriteLine(e2*5);
            //checked{
            //}
            //&& || ^ yada shift 3 space
            //i++; ++i; i=i+3; !olumsuz !=eşit degilse
                string sonuc = yas < 25 ? "a" : (yas == 25 ? "b" : "c");
                // Console.WriteLine("yaş girin");
                  int sayi = int.Parse(Console.ReadLine());
                string sonuc = sayi < 25 ? "a" : (yas == 25 ? "b" : "c");
            //  =assign
                int birinciurunfiyati = int.Parse(Console.ReadLine());
                //Console.Write("fiyat");
                int ikinciurunfiyati = int.Parse(Console.ReadLine());
              //  if (birinciurunfiyati+ikinciurunfiyati>200)
                //    {
                  //  Console.WriteLine(birinciurunfiyati+(ikinciurunfiyati*75/100));
                    //}
                //else
                  //  {
                    //Console.WriteLine(birinciurunfiyati+ikinciurunfiyati);
                    //}
	       //     try
           //     {
           //     Console.WriteLine("sayi girin");
           //     int sayi1 = int.Parse(Console.ReadLine());
           //     Console.WriteLine("sayi girin");
           //     int sayi2 = int.Parse(Console.ReadLine());
           //     Console.WriteLine("toplam:"+(sayi1+sayi2));
           //     }
           //     catch
           //     {
           //     Console.WriteLine("lütfen syi girin");
           //     }
           //     finally
           //     {
           //     }
            int toplamsonuc = 0;
         //   for (int i = 10; i <=40; i++)
         //   {
         //      if (i%2==0)
         //      { toplamsonuc += i;
        //       }
         //   }
         //   Console.WriteLine("toplamsonuc:"+toplamsonuc);

            string x="";
          //  if (!string.IsNullOrEmpty(x))
          //  {
          //  }
          //  if (string.IsNullOrWhiteSpace(x))  //boşluk
          //  {
          //  }
            string metin = " yunus emre deniz";
            bool sonuc = metin.Contains("emre");
        //    Console.WriteLine(sonuc);
        //    Console.WriteLine(metin.Equals(" yunus emre deniz"));
        //    Console.WriteLine(metin.Substring(0,6));
        //    Console.WriteLine(metin.ToLower());
        }
        class Singleton
        {
            private Singleton()
            {
            }
            private static Singleton nesne;
            public static Singleton Nesnever()
            {
            if (nesne==null)
            {
                nesne = new Singleton();
            }
            return nesne;
            }

        }

        }
}