/*
    KULLANIMI:
    AswNotification bildirim = new AswNotification(getApplicationContext(), "KANAL ADI", "BİLDİRİM ID");
    bildirim.setIntent(new Intent(getApplicationContext(), GidilecekActivity.class));
    bildirim.show("Başlık", "Açıklama", R.drawable.gorsel_name);
*/


public class AswNotification{
    private static Integer BILDIRIM_ID = 1138;
    private static String BILDIRIM_KANAL = "reminder_notification_channel";
    private static Context context;
    private static Integer mIcon;
    private static Intent mIntent = null;

    public AswNotification(Context context, String channel_id, Integer notify_id){
        this.context = context;
        this.BILDIRIM_ID = notify_id;
        this.BILDIRIM_KANAL = channel_id;
    }

    public AswNotification(Context context, String channel_id){
        this.context = context;
        this.BILDIRIM_ID =(int) (Math.random()* 999999);
        this.BILDIRIM_KANAL = channel_id;
    }

    public void setIntent(Intent intent){
        this.mIntent = intent;
    }

    public void show(String title, String description, @Nullable Integer icon) {
        this.mIcon = icon;

        NotificationManager notificationManager = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationChannel mChannel = new NotificationChannel(
                    BILDIRIM_KANAL,
                    "Primary",
                    NotificationManager.IMPORTANCE_HIGH);
            notificationManager.createNotificationChannel(mChannel);
        }
        NotificationCompat.Builder notificationBuilder = new NotificationCompat.Builder(context, BILDIRIM_KANAL);
        //---NOTIFICATION SPECS---
        notificationBuilder
                .setColor(ContextCompat.getColor(context, R.color.colorPrimary))
                .setSmallIcon(mIcon)
                .setLargeIcon(largeIcon(context))
                .setContentTitle(title)
                .setContentText(description)
                .setStyle(new NotificationCompat.BigTextStyle().bigText(description))
                .setDefaults(Notification.DEFAULT_VIBRATE)
                .setAutoCancel(true);

        if(mIntent != null){
            mIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK);
            PendingIntent pendingIntent = PendingIntent.getActivity(context, BILDIRIM_ID, mIntent, 0);
            notificationBuilder.setContentIntent(pendingIntent);
        }


        //---NOTIFICATION SPECS---


        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN && Build.VERSION.SDK_INT < Build.VERSION_CODES.O) {
            notificationBuilder.setPriority(NotificationCompat.PRIORITY_HIGH);
        }
        notificationManager.notify(BILDIRIM_ID, notificationBuilder.build());
    }

    private static Bitmap largeIcon(Context context) {
        Resources res = context.getResources();
        Bitmap largeIcon = BitmapFactory.decodeResource(res, mIcon);
        return largeIcon;
    }
}
