package hac.beans;

import org.springframework.stereotype.Component;

@Component
public class CartItem {
    private Integer id;
    private String price;
    private String name;
    private String title;
    private String overview;
    private String backdrop_path;
    private String poster_path;
    private String media_type;
    private String first_air_date; // YYYY-MM-DD
    private String release_date; // YYYY-MM-DD
    private String vote_average;

    public CartItem(){

    }

    public CartItem(Integer id, String price, String name, String title, String overview, String backdrop_path,
                    String poster_path, String media_type, String first_air_date, String release_date,
                    String vote_average){
        this.id = id;
        this.price = price;
        this.name = name;
        this.title = title;
        this.overview = overview;
        this.backdrop_path = backdrop_path;
        this.poster_path = poster_path;
        this.media_type= media_type;
        this.first_air_date= first_air_date; // YYYY-MM-DD
        this.release_date= release_date; // YYYY-MM-DD
        this.vote_average = vote_average;
    }

    public Integer getId(){
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOverview() {
        return overview;
    }

    public void setOverview(String overview) {
        this.overview = overview;
    }

    public String getBackdrop_path() {
        return backdrop_path;
    }

    public void setBackdrop_path(String backdrop_path) {
        this.backdrop_path = backdrop_path;
    }

    public String getPoster_path() {
        return poster_path;
    }

    public void setPoster_path(String poster_path) {
        this.poster_path = poster_path;
    }

    public String getMedia_type() {
        return media_type;
    }

    public void setMedia_type(String media_type) {
        this.media_type = media_type;
    }

    public String getFirst_air_date() {
        return first_air_date;
    }

    public void setFirst_air_date(String first_air_date) {
        this.first_air_date = first_air_date;
    }

    public String getVote_average() {
        return vote_average;
    }

    public void setVote_average(String vote_average) {
        this.vote_average = vote_average;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getRelease_date() {
        return release_date;
    }

    public void setRelease_date(String release_date) {
        this.release_date = release_date;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }
}
