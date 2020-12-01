/*
    KULLANIMI:
    AswRequest request = new AswRequest(getApplicationContext(), sql_code, single=true|false, params=HashMap);
    request.request(new AswResponse() {
        @Override
        public void run(JSONObject object) {
            // ÇALIŞACAK KODLAR
        }
    });
*/



public class AswRequest {

    private String url = "http://url/request.php";
    private int method;
    private Context context;
    private String sql;
    private Boolean single;
    private Map<String, String> mParams;


    public AswRequest(Context context, String sql, @Nullable Boolean single, @Nullable Map<String, String> params){
        this.method = Request.Method.POST;
        this.context = context;
        this.mParams = params;
        this.sql = sql;
        this.single = single;
    }

    public void request(final AswResponse aswResponse){
        RequestQueue queue = Volley.newRequestQueue(context);
        StringRequest request = new StringRequest(method, url,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        try {
                            aswResponse.run(new JSONObject(response));
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        error.printStackTrace();
                    }
                }){
            @Override
            protected Map<String, String> getParams() throws AuthFailureError {
                Map<String, String> params = new HashMap<String, String>();
                if( mParams != null ){ params = mParams; }
                params.put("sql", sql);
                if( single == true ){ params.put("single", "1"); }
                return params;
            }
        };
        queue.add(request);
    }








}
