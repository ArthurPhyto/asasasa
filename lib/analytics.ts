import { supabase } from './supabase';

export async function trackPageView(url: string, ip: string, userAgent?: string) {
  try {
    const { data, error } = await supabase
      .from('visits')
      .insert({
        ip_address: ip,
        user_agent: userAgent,
        page_url: url
      })
      .select()
      .single();

    if (error) {
      console.error('Error tracking page view:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error tracking page view:', error);
    return null;
  }
}