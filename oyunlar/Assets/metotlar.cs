using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;
using UnityEngine.UI;

public class metotlar : MonoBehaviour
{
    public GameObject top=null;
    public int darbesayisi = 1;
    static int tuglasayisi=0;
    int hak = 4;
    public Canvas mycanvas;
    public int skorpuan = 1;
    int skor = 0;
    public Transform player;
    public Text skortext;
    Animator _animator;
    CanvasGroup _canvasGroup;
    NavMeshAgent agent;
    LineRenderer line;
    float maxwidth;
    public GameObject ball;
    public Text zaman;
    public float kalanzaman;
    public Text skor2;
    int score;
    public float speed;
    Animator anim;
    public float dusmanhizi;
    public Transform player2;
    void Start()
    {
        tuglasayisi++;
        topolustur();
                DontDestroyOnLoad(gameObject);
        DontDestroyOnLoad(mycanvas);//level 2 sil
        agent = GetComponent<NavMeshAgent>();
        line = gameObject.GetComponent<LineRenderer>();
        line.enabled = false;
        Vector3 uppercorner = new Vector3(Screen.width, Screen.height, 0);
        Vector3 targetwidth = Camera.main.ScreenToWorldPoint(uppercorner);// iskinematic true
        //float hatwidth = renderer.bounds.extents;
        //maxwidth = targetwidth.x - hatwidth;
        //float ballwidth =ball.renderer.bounds.extents;
        //maxwidth = targetwidth.x -ballwidth;
        StartCoroutine(Spawn());
        updatezaman();
        score = 0;
        updateskor();
        anim = GetComponent<Animator>();
    }
    public void OnLevelWasLoaded(int level)
    {
        topolustur();
        
    }
    void topolustur()
    {
        top = (GameObject)Instantiate(top, transform.position = new Vector3(0, 0.7f, 0), Quaternion.identity);

    }
    void Update()
    {
        #region güç uygulama
        if (top)
        {
           // top.rigidbody.position = transform.position + new Vector3(0, 0.7f, 0);
            if (Input.GetButtonDown("Jump"))
            { //top.rigibody.isKinematic=false;//unity true seçilecek
                //top.rigibody.AddForce(20f*Input.GetAxis("Horizontal"), 20f, 0);
                top = null;

            }
           
        }
        
        #endregion
        #region kamera takip
        transform.position = new Vector3(player.position.x + 6, 0, -10);
        #endregion
        #region yön
        transform.Translate(10f * Time.deltaTime * Input.GetAxis("Horizontal"), 0, 0);
        if (transform.position.x<-4.4f)
        {
            transform.position = new Vector3(-4.4f, transform.position.y, transform.position.z);

        }
        if (transform.position.x < 4.4f)
        {
            transform.position = new Vector3(4.4f, transform.position.y, transform.position.z);

        }
        #endregion
        if (Input.GetMouseButtonDown(0))
        {
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            RaycastHit hit;
            if (Physics.Raycast(ray,out hit, 100))
            {
                agent.SetDestination(hit.point);
            }
        }
        if (Input.GetButtonDown("Fire1 "))
        {
            StopCoroutine("Firelazer");
            StartCoroutine("Firelazer");
        }
        kalanzaman -= Time.deltaTime;
        if (kalanzaman<=0)
        {
            kalanzaman = 0;

        }
        updatezaman();
        if (Input.GetMouseButtonDown(0))
        {
            anim.SetTrigger("ateset");

        }
    }
    IEnumerator Firelazer()
    {
        line.enabled = true;
        while (Input.GetButton("Fire1"))
        {
            Ray ray = new Ray(transform.position, transform.forward);
            line.SetPosition(0, ray.origin);
            RaycastHit hit;
            if (Physics.Raycast(ray,out hit,100))
            {
                line.SetPosition(1, hit.point);
                if (hit.rigidbody)
                {
                    Collider[] colliders = Physics.OverlapSphere(hit.point, 5);
                 

                }

            }
            else
            {
                line.SetPosition(1, ray.GetPoint(100));

            }
           
            yield return null;
        }
        line.enabled = false;
    }
    private void OnCollisionEnter(Collision collision)
    {
        foreach (ContactPoint contact in collision.contacts)
        {
            //if (contact.thisCollider==collider)
            //{
            //    float kayma = contact.point.x - transform.position.x;
            //  //  contact.otherCollider.rigidbody.AddForce(300f * kayma, 0, 0);

            //}    

        }
        darbesayisi--;
        if (darbesayisi<=0)
        {
            die();

        }
        hak--;
        if (hak<=0)
        {
            mycanvas.GetComponentInChildren<Text>().text = "lives" + hak;

        }
        
    }
    
    void die()
    {
        Destroy(gameObject);
        //GameObject.Find("").GetComponent<>.skorekle(skorpuan);
        tuglasayisi--;
        if (tuglasayisi <= 0)
        {
            Debug.Log("oyun bitti");
            Application.LoadLevel("level2");
        }
    }
    public void skorekle(int v)
    {
        skor += v;
        skortext.text = "skor" + skor;
    }
    public bool isopen
    {
        get { return _animator.GetBool("isopen"); }
        set { _animator.SetBool("isopen", value); }
    }
    public void Awake()
    {
        _animator = GetComponent<Animator>();
        _canvasGroup = GetComponent<CanvasGroup>();
        
    }
    private void FixedUpdate()
    {
        Vector3 rawpos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        Vector3 targetpos = new Vector3(rawpos.x, 0, 0);
        float targetwidth = Mathf.Clamp(targetpos.x, -maxwidth, +maxwidth);
        targetpos = new Vector3(targetwidth, targetpos.y, targetpos.z);
        //rigidbody.MovePosition(targetpos);
        updatezaman();
        var mouseposition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        Quaternion rot = Quaternion.LookRotation(transform.position - mouseposition, Vector3.forward);
        transform.rotation = rot;
        transform.eulerAngles = new Vector3(0, 0, transform.eulerAngles.z);

        float input = Input.GetAxis("Vertical");
        //rigidbody.AddForce(gameObject.transform.up * speed * input);

        float z = Mathf.Atan2((player.transform.position.y - transform.position.y),
                            (player.transform.position.x - transform.position.x)) * Mathf.Rad2Deg - 90;
        transform.eulerAngles = new Vector3(0, 0, z);
        Rigidbody.AddForce(gameObject.transform.up * dusmanhizi);
    }
    private void OnTriggerEnter(Collider other)//silaha
    {
        Destroy(other.gameObject);
        score +=1;
        updateskor();

    }
    IEnumerator Spawn()
    {
        while (kalanzaman>=0)
        {
            Vector3 spawnposition = new Vector3(Random.Range(-maxwidth, maxwidth), transform.position.y, 0);
            Instantiate(ball, spawnposition, Quaternion.identity);
            yield return new WaitForSeconds(Random.Range(1.0f, 2.0f));
        }
    }
    void updatezaman()
    {
        zaman.text = "time left\n" + Mathf.RoundToInt(kalanzaman);
    }
    void updateskor()
    {
        skor2.text = "skor:" + score; 
    }
}